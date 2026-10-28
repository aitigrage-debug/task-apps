import type { BadgeProps } from "./Badge";
import { Badge } from "./Badge";



interface BadgeContainerProps {
    children: React.ReactNode;
    badge: React.ReactNode;

    variant?: BadgeProps['variant'];
    size? : BadgeProps['size'];

    className? : string

}



function BadgeContainer ({ variant= "default", size="small", children, className="", badge}: BadgeContainerProps) {
    return (
        <span className={`relative inline-flex ${className}`} >
            {children}

            <Badge variant={variant} size={size} className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-[0.6rem] rounded-full">
                {badge}
            </Badge>


        </span>
    )
}


export {BadgeContainer};
export type { BadgeContainerProps}