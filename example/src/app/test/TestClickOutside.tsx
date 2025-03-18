import React, { useState } from 'react'
import { useClickOutside } from '@gr8g1/use-your-work'

const TestClickOutside = () => {
  const [open, setOpen] = useState(false)

  const ref = useClickOutside<HTMLDivElement>(() => {
    console.log('외부 클릭 감지됨!')
    setOpen(false)
  })

  return (
    <div>
      <h3>useClickOutside</h3>
      <button onClick={() => setOpen(true)}>모달 열기</button>

      {open && (
        <div ref={ref} style={styles.modal}>
          <p>이 박스 외부를 클릭하면 닫힙니다.</p>
          <button onClick={() => setOpen(false)}>닫기</button>
        </div>
      )}
    </div>
  )
}

const styles = {
  modal: {
    border: '1px solid rgba(0, 0, 0, .9)',
    padding: '10px',
    marginTop: '10px',
    backgroundColor: 'white',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, .2)',
  } as React.CSSProperties,
}

export default TestClickOutside
