import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { useClickOutside } from '../src/hooks/useClickOutside'

interface TestComponentProps {
  onOutsideClick: (event: MouseEvent | TouchEvent) => void
}

const TestComponent: React.FC<TestComponentProps> = ({ onOutsideClick }) => {
  const ref = useClickOutside<HTMLDivElement>(onOutsideClick)

  return (
    <div>
      <div data-testid='inside' ref={ref}>
        내부 요소
      </div>
      <div data-testid='outside'>외부 요소</div>
    </div>
  )
}

describe('useClickOutside', () => {
  it('내부 요소 클릭 시 콜백이 호출되지 않아야 함', () => {
    const handleOutsideClick = jest.fn()
    const { getByTestId } = render(
      <TestComponent onOutsideClick={handleOutsideClick} />,
    )

    fireEvent.mouseDown(getByTestId('inside'))
    expect(handleOutsideClick).not.toHaveBeenCalled()
  })

  it('외부 요소 클릭 시 콜백이 호출되어야 함', () => {
    const handleOutsideClick = jest.fn()
    const { getByTestId } = render(
      <TestComponent onOutsideClick={handleOutsideClick} />,
    )

    fireEvent.mouseDown(getByTestId('outside'))
    expect(handleOutsideClick).toHaveBeenCalledTimes(1)
  })
})
