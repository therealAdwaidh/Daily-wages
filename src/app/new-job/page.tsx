'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewJobPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await fetch('/api/jobs', {
      method: 'POST',
      body: JSON.stringify({ title, description, location }),
      headers: { 'Content-Type': 'application/json' },
    })

    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">Post a New Job</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required className="border p-2 w-full" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required className="border p-2 w-full" />
      <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" required className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  )
}
