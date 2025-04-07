export function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 rounded-xl font-semibold  text-white transition ${className}`}
      {...props}
    />
  );
}
