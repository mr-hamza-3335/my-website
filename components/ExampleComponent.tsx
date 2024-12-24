import Image from 'next/image'
import { images } from '@/lib/imageAssets'

export function ExampleComponent() {
  return (
    <div>
      <Image
        src={images.example}
        alt="Example image"
        width={500}
        height={300}
      />
    </div>
  )
}

