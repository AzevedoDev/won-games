import { screen } from '@testing-library/react'

import Logo from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
