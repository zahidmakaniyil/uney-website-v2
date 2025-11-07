const HamburgerMenuIcon = ({ isScrolled }: { isScrolled: boolean }) => {
    const strokeColor = isScrolled ? "#374151" : "white"; // gray-700 or white

    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.5 10H17.5M2.5 5H17.5M2.5 15H12.5"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default HamburgerMenuIcon;
