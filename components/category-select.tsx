'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categoryData } from '@/lib/category-data'

export function CategorySelect() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const router = useRouter()

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    if (value === 'all') {
      router.push('/products')
    } else {
      router.push(`/categories/${value}`)
    }
  }

  return (
    <div className="mb-8">
      <Select value={selectedCategory} onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {Object.entries(categoryData).map(([key, category]) => (
            <SelectItem key={key} value={key}>{category.title}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

