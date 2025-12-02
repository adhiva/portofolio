import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/life-logs')({
  component: LifeLogsLayout,
})

function LifeLogsLayout() {
  return <Outlet />
}
