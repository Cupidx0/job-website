import React,{ useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from './firebase';  // Ensure Firestore is imported
import { useAuth } from './AuthContext';  // Assuming you're using this hook for auth

const JobTracker = () => {
  const {user} = useAuth();
  const [appliedJobs, setAppliedJobs] = useState('');

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      if (!user || !user.uid) return;  // If user is not authenticated, don't fetch data

      const q = query(
        collection(db, "appliedJobs"),
        where("userId", "==", user.uid)
      );

      try {
        const querySnapshot = await getDocs(q);
        const jobs = querySnapshot.docs.map(doc => ({
          id: doc.id, 
          ...doc.data()
        }));
        setAppliedJobs(jobs);  // Set jobs into state
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      }
    };

    fetchAppliedJobs();
  }, [user]);  // Re-run this effect when user changes

  return (
    <div>
      <h2 className="text-2xl text-left font-bold mb-10 text-blue-500">Applied Jobs</h2>
      <ul>
        {appliedJobs.length === 0 ? (
          <li className="text-center text-gray-500">No jobs applied yet.</li>
        ) : (
          appliedJobs.map((newCard, idx) => (
            <li key={idx} className="flex items-center gap-2 transition-transform hover:text-blue-500 rounded-md border border-gray-200 mb-4">
              <h3 className="mt-1 font-bold">{newCard.title} <br /> {newCard.company}</h3>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default JobTracker;

