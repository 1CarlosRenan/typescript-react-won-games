import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)

    const svg = screen.getByLabelText(/Won Games/i).parentElement
    expect(svg).toHaveStyle({ color: '#FAFAFA' })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color='black' />)

    const svg = screen.getByLabelText(/Won Games/i).parentElement
    expect(svg).toHaveStyle({ color: '#030517' })
  })
})
