'use client';

import { useForm } from 'react-hook-form';

export default function PostJobPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) alert('Job posted!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-4 space-y-4">
      <input {...register('title')} placeholder="Title" className="p-2 border w-full" />
      <textarea {...register('description')} placeholder="Description" className="p-2 border w-full" />
      <input {...register('category')} placeholder="Category" className="p-2 border w-full" />
      <input {...register('subcategory')} placeholder="Subcategory" className="p-2 border w-full" />
      <select {...register('jobType')} className="p-2 border w-full">
        <option value="physical">Physical</option>
        <option value="remote">Remote</option>
      </select>
      <input {...register('duration')} placeholder="Duration (e.g., 1_hour)" className="p-2 border w-full" />
      <input {...register('location')} placeholder="Location" className="p-2 border w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Post Job</button>
    </form>
  );
}
