import { styled } from "@/styles"

const Button = styled('button', {
  backgroundColor: '$green500',
  color: '$gray100',
  border: 0,
  borderRadius: 8,
  padding: '1rem 2rem',
  fontSize: '1rem',
  fontWeight: 'bold',

  '&:hover': {
    filter: 'brightness(.8)'
  },
})

export default function Home() {
  return (
    <>
    <Button>Send</Button>
    </>
  )
}
