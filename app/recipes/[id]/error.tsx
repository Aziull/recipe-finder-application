'use client'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div>
            <h2>Something went wrong while loading recipe informarion!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}