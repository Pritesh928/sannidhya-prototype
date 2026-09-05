function PageHeader({
  title,
  subtitle,
  navigate,
  backTo = "patient",
}) {
  return (
    <div className="page-header">

      <button
        className="back-button"
        onClick={() => navigate(backTo)}
      >
        ←
      </button>

      <div>
        <h1>{title}</h1>

        {subtitle && (
          <p>{subtitle}</p>
        )}
      </div>

    </div>
  );
}

export default PageHeader;