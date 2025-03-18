import { useExpiration } from '@gr8g1/use-your-work'

const TestExpiration = () => {
  const { expired, setExpiration } = useExpiration(
    'useExpirationTest',
    1,
    undefined,
    () => {
      console.log('만료됨!')
    },
  )

  return (
    <div>
      <h3>useExpiration</h3>
      <p>만료 여부 (1초): {expired ? '✅ 만료됨' : '⏳ 유효함'}</p>
      <button onClick={() => setExpiration()}>만료 시간 설정</button>
    </div>
  )
}

export default TestExpiration
