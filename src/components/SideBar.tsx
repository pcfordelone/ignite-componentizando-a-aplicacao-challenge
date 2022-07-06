import { GenreResponseProps } from '../App'
import { Button } from './Button'

interface ISidebarProps {
  genres: GenreResponseProps[] | []
  handleClickButton: (id: number) => void
  selectedGenre: GenreResponseProps
}

export function SideBar({
  genres,
  handleClickButton,
  selectedGenre,
}: ISidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenre.id === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
