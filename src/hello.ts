const hello = (name: string): void => {
  const body = document.body
  if (body) {
    const hedding = document.createElement("h1")
    hedding.textContent = `Hello ${name}`
    body.appendChild(hedding)
  }
}

const onLoad = (): void => {
  hello("World")
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onLoad)
} else {
  onLoad()
}
