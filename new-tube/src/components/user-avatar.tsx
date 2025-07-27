import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const avatarSize = cva("rounded-full",{
    variants: {
        size: {
            default: "w-10 h-10",
            xs: "w-6 h-6",
            sm: "w-6 h-6",
            md: "w-8 h-8",
            lg: "w-10 h-10",
            xl: "w-12 h-12",
            xxl: "w-14 h-14",
        },
        defaultVariants: {
            size: "default",
        },
    },
});

interface UserAvatarProps extends VariantProps<typeof avatarSize> {
    imageUrl: string;
    name: string;
    className?: string;
    onClick?: () => void;
}


const UserAvatar = ({
    size = "default",
    imageUrl,
    name,
    className,
    onClick,
}: UserAvatarProps) => {
    return (
        <Avatar className={cn(avatarSize({ size }), className)}>
            <AvatarImage src={imageUrl} />
            <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
    )
}
export default UserAvatar;