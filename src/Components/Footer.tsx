import { FC } from 'react'
import '../styles/footer.css'

export const Footer: FC = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <h1 className="title">
          Made by:
          <a
            href="https://github.com/stojanoviicmarko"
            target="_blank"
            rel="noreferrer"
          >
            Marko Stojanovic
          </a>
        </h1>
      </div>
    </div>
  )
}
