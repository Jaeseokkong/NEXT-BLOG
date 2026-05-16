import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'

function Hero() {
  return (
    <>
        <Title level={1}>성능과 구조,<br/> 두 가지를 <span className="text-indigo-400">함께</span> 봅니다.</Title>
        <Text>5년차 프론트엔드 개발자 한재석입니다. 실무에서 겪은 문제를 데이터로 증명하고, 유지보수 가능한 구조로 풀어냅니다.</Text>
    </>
  )
}

export default Hero