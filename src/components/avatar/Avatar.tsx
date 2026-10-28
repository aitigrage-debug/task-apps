import { useState, useEffect } from "react";

interface AvatarProps extends React.ComponentProps<"div"> {
    src?: string;
    alt?: string;
    size?: "small" | "medium" | "large";
    variant?: "circle" | "rounded" | "square";
    children?: React.ReactNode;
    className?: string;

};


function Avatar ( {
    src,
    alt = "Avatar",
    size = "medium",
    variant = "circle",
    children,
    className = "",
    ...props
}: AvatarProps ) {

    const [imageError, setImageError] = useState(false)

    const avatarStyles = "inline-flex items-center justify-center overflow-hidden flex-shrink-0 bg-gray-100 text-gray-400 ";

    const sizeVStyles = {
        small : "w-8 h-8 text-xs",
        medium : "w-12 h-12 text-sm",
        large : "w-16 h-16 text-base",
    }[size];

    const variantStyles = {
        circle : "rounded-full",
        rounded : "rounded-lg",
        square : "rounded-none",
    }[variant];
    
    useEffect(()=> {
        setImageError(false)
    },[src]);



    return (
    <div className={`${avatarStyles} ${sizeVStyles} ${variantStyles} ${className}`}  {...props}>
        {src && !imageError ? (<img className="w-full h-full object-cover"
                     src={src} alt={alt} key={src} onError={() => setImageError(true)} />) : 
            (
                <span className="flex items-center justify-center w-full h-full">
                    { children ?? (alt ? getInitial(alt) : "?") }
                </span>    
                
            
            )
        }

    </div>)
}


function getInitial(name :string) {
    return name
    .split(" ")
    .filter(Boolean)
    .slice(0,2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}




export default Avatar;

