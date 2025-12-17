const StatusBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border backdrop-blur-sm animate-fade-in">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
      </span>
      <span className="text-muted-foreground text-sm font-medium">Available for projects</span>
    </div>
  );
};

export default StatusBadge;
