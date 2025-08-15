export function LoadingSpinner({ size = "sm", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  return (
    <div className={`inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${sizeClasses[size]} ${className}`}>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function FormLoadingState() {
  return (
    <div className="space-y-4">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded skeleton"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded skeleton"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded skeleton w-3/4"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded skeleton"></div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="modern-card p-6 animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-300 dark:bg-gray-700 h-12 w-12"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}