export default function StatsTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-black/40">
      <table className="w-full text-left">
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k} className="border-b border-white/5 last:border-0">
              <th className="px-6 py-4 text-sm uppercase tracking-widest text-gray-400 font-medium w-1/2">
                {k}
              </th>
              <td className="px-6 py-4 text-white font-display font-medium">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
