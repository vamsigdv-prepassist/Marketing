"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { HeadphonesIcon, Search, Mail, CheckCircle, Clock } from "lucide-react";

type SupportRequest = {
  id: string;
  name: string;
  email: string;
  category: string;
  description: string;
  status: "open" | "closed";
  createdAt: any;
};

export default function AdminSupportPage() {
  const [requests, setRequests] = useState<SupportRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const q = query(collection(db, "support_requests"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as SupportRequest[];
      setRequests(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const toggleStatus = async (id: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === "open" ? "closed" : "open";
      await updateDoc(doc(db, "support_requests", id), {
        status: newStatus
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredRequests = requests.filter(req => 
    (req.name || "").toLowerCase().includes((searchTerm || "").toLowerCase()) || 
    (req.email || "").toLowerCase().includes((searchTerm || "").toLowerCase()) ||
    (req.category || "").toLowerCase().includes((searchTerm || "").toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center">
            <HeadphonesIcon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">Support Requests</h1>
            <p className="text-sm font-medium text-slate-500">Manage user issues and support tickets</p>
          </div>
        </div>
        
        <div className="relative w-full md:w-auto">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search tickets..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/50 text-sm font-medium"
          />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">User Details</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Issue Description</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-400 font-medium">Loading support requests...</td>
                </tr>
              ) : filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-400 font-medium">No support requests found.</td>
                </tr>
              ) : (
                filteredRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">{req.name}</div>
                      <a href={`mailto:${req.email}`} className="text-xs text-indigo-500 hover:text-indigo-600 font-medium flex items-center gap-1 mt-0.5">
                        <Mail className="w-3 h-3" /> {req.email}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wide">
                        {req.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 max-w-xs">
                      <p className="text-slate-600 truncate" title={req.description}>
                        {req.description}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-slate-500 font-medium">
                        {req.createdAt?.toDate ? new Date(req.createdAt.toDate()).toLocaleDateString() : 'Just now'}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {req.status === 'open' ? (
                        <span className="flex items-center gap-1.5 text-amber-500 font-bold text-xs bg-amber-50 px-2.5 py-1 rounded-lg w-fit">
                          <Clock className="w-3.5 h-3.5" /> Open
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-emerald-500 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-lg w-fit">
                          <CheckCircle className="w-3.5 h-3.5" /> Resolved
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => toggleStatus(req.id, req.status)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors border ${
                          req.status === 'open' 
                            ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50' 
                            : 'bg-white border-rose-200 text-rose-500 hover:bg-rose-50'
                        }`}
                      >
                        {req.status === 'open' ? 'Mark Resolved' : 'Reopen'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
