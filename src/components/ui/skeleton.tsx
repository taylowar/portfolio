import { cn } from 'src/lib/util';

function Skeleton({
    className,
    hasLoaded,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    hasLoaded: boolean;
}) {
    return (
        <>
            {hasLoaded ? (
                children
            ) : (
                <div
                    className={cn(
                        'animate-pulse rounded-md bg-muted',
                        className,
                    )}
                    {...props}
                />
            )}
        </>
    );
}

export { Skeleton };
