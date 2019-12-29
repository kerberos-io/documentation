import * as React from 'react'
import { Helmet } from 'react-helmet-async'

const Wrapper = ({ children, doc }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{doc.value.name}</title>
        <link
          rel="icon"
          type="image/png"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAb5JREFUeNpiYKAQMKMLzPHzDmCVkD4eqaXuwSop7XD30cON+AxgRBfIdHE+f/HbTwMkIcVjx448wGUAEzJna7C/wIc//8CaOZgYGeTZWBl0Odn7geIKRLlgfnK8w4OnL/arc7Ax8DMzoaud4L12YyFeF7zi5zfQFhZA0fzx7z+Gh79+g5gFQJck4DXgPwND1l8mVJtPff3OsOTtJ5gh84GG3F8e4NtvZWVjgOIFFxc3B1tttf1yXz4ziH34gDfqQK6a8uo9gxALcyHcum/fvsX//P2H4Ss7O8G4B3kxVJCX4d2fvwdYQAJA5wgAqYCP374z8AvxM4C88RPouDesTAzSzP8ZWOGphhHm5g8aXCyFx7Zuv8AClXIAYoH3X74xyAENeMvHx/Di8zeGA2+/MPz/94dBgpfzQ5QIRyBU7QOPWavg6QJmADhA3nz6zPD3vwTDW15eBg6gYYKCggxfv35lePHl5waPdZsO4EtIIBMTv3z5Evjz778DIC8wiQozqDH8ZRDk5mIQEhK6SHRSBoHOorx+ULyz/fnDwP3jB8M/JibDjBlzLhBtANQQUPJV+Pmf8VVd/8RrDLQCAAEGAMham/r8eLajAAAAAElFTkSuQmCC"
        />
      </Helmet>
      {children}
    </React.Fragment>
  )
}

export default Wrapper
