const CategoryCard = ({ data }) => {
    if (!data) return null;

    return (
        <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-xl">
            <img
                src={data.image || "/assets/images/placeholder.png"}
                alt={data.name || "Category"}
                className="mb-2 h-32 w-32 rounded-md object-cover"
            />
            <h3 className="text-center text-lg font-medium text-gray-800">
                {data.name || "Unnamed"}
            </h3>
        </div>
    );
};

export default CategoryCard;
