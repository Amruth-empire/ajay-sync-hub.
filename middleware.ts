import { updateSession } from '@/lib/supabase/middleware'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    // Update session
    const response = await updateSession(request)

    // Protected routes that require authentication
    const protectedRoutes = ['/dashboard', '/projects', '/agencies', '/reports']
    const isProtectedRoute = protectedRoutes.some(route =>
        request.nextUrl.pathname.startsWith(route)
    )

    if (isProtectedRoute) {
        // If there's no user and trying to access protected route, redirect to auth
        const supabaseResponse = response
        const cookies = supabaseResponse.cookies
        const authToken = cookies.get('sb-access-token')

        if (!authToken) {
            const url = request.nextUrl.clone()
            url.pathname = '/auth'
            return NextResponse.redirect(url)
        }
    }

    return response
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
