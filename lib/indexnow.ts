// IndexNow — push URL-changed notifications to Bing / Yandex / Seznam / Naver.
// Google doesn't support IndexNow yet but monitors it. ChatGPT + Copilot read
// Bing's index, so faster Bing reindex = faster AI visibility on those surfaces.
//
// Key file is served at /de70e44d61f29841aa01ebde75f50209.txt (matches filename).
// If you rotate the key, generate a new hex string, rename the public/ file to
// match, and update both constants below.

const INDEXNOW_KEY = 'de70e44d61f29841aa01ebde75f50209'
const HOST = 'www.peptidesmuscle.com'
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`
const ENDPOINT = 'https://api.indexnow.org/indexnow'

export async function submitToIndexNow(urls: string[]): Promise<void> {
  if (urls.length === 0) return
  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      console.error(`IndexNow submission failed: ${res.status} ${res.statusText}`)
    }
  } catch (err) {
    console.error('IndexNow submission error:', err)
  }
}
