function FeaturesCard({ icon: Icon, title, description }) {
  return (
    <div
      className="
        group
        p-8
        rounded-2xl
        bg-white/5
        border border-white/10
        transition-all duration-300
        hover:border-rose-500/40
        hover:bg-white/10
      "
    >
      {/* Icon */}
      <div className="mb-6">
        <div
          className="
            w-12 h-12
            flex items-center justify-center
            rounded-xl
            bg-rose-500/10
          "
        >
          <Icon className="w-6 h-6 text-rose-500" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default FeaturesCard;
