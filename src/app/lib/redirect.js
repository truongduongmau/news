export async function loadPosts(url) {

    return await fetch(url, { cache: 'no-store' })
}