import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/html')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>HTML quick reference sheet</h1>
    <table>
      <thead>
        <tr>
          <th>Element</th>
          <th>Info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&lt;html&gt; tag</td>
          <td>this is a container for all other elements within an HTML document (except the &lt;!DOCTYPE&gt; tag)</td>
        </tr>
        <tr>
          <td>&lt;head&gt; tag</td>
          <td>this is a container for all the docuemnts meta data</td>
        </tr>
      </tbody>
      
      
    </table>
  </div>
}
