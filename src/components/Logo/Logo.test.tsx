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

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size='large' />)

    const svg = screen.getByLabelText(/Won Games/i).parentElement
    expect(svg).toHaveStyle({ width: '20rem' })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)

    const svg = screen.getByLabelText(/Won Games/i).parentElement
    expect(svg).toHaveStyle({ width: '11rem' })
  })
})
