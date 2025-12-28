// src/components/product/ProductComparison/ComparisonTable.jsx
const ComparisonTable = ({ products }) => (
    <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border bg-white">
            <thead className="bg-gray-100">
                <tr>
                    <th className="p-3">Feature</th>
                    {products.map((p) => (
                        <th key={p.id} className="p-3">{p.name}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {["Price", "Brand", "Stock"].map((feat) => (
                    <tr key={feat} className="border-t">
                        <td className="p-3 font-medium">{feat}</td>
                        {products.map((p) => (
                            <td key={p.id} className="p-3">{p[feat.toLowerCase()]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default ComparisonTable;
