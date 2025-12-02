import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/writing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/writing"!</div>
}
