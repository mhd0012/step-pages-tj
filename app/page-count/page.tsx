'use client'
import { useRouter, usePathname, useParams } from 'next/navigation';

export default function MyComponent() {
    const router = useParams();
    console.log(router)
    const  pathname  = router.slug;
    // @ts-ignore
    return (
        <div>
            <p>The current path is:</p>
            {pathname}
        </div>
    );
}