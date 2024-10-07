import "@/components/utility/learnMore/learnMoreAnimation.css"
import Link from 'next/link';

function LearnMore({ text='Learn More', href='#', className='' }) {
    return (
        <Link href={href} className={`${className} self-center learn-more learn-more-button`}>
            <span className="learn-more-circle" aria-hidden="true">
                <span className="learn-more-icon learn-more-arrow"></span>
            </span>
            <span className="learn-more-button-text font-Inter font-medium tracking-[1px]">{text}</span>
        </Link>
    )
}

export default LearnMore;