const ColorItem = (props: any) => {
    const { text, color } = props;

    return (
        <div style={{ width: '230px' }} className="f-flex f-flex-row f-gap-16 f-align-center">
            <span className={`f-background-${color} f-width-40 f-height-40 f-radius-10`}></span>
            <span className="f-text-label">{text}</span>
        </div>
    );
};

const ColorSection = () => {
    return (
        <div>
            <div className="f-flex f-flex-row f-gap-16 f-align-center f-flex-wrap">
                <ColorItem text="white - #fff" color="white" />
                <ColorItem text="light - #f8f9fa" color="light" />
                <ColorItem text="gray - #6c757d" color="gray" />
                <ColorItem text="gray-dark - #343a40" color="gray-dark" />
                <ColorItem text="dark - #343a40" color="dark" />
                <ColorItem text="yellow - #ffc107" color="yellow" />
                <ColorItem text="orange - #fd7e14" color="orange" />
                <ColorItem text="red - #dc3545" color="red" />
                <ColorItem text="pink - #e83e8c" color="pink" />
                <ColorItem text="purple - #6f42c1" color="purple" />
                <ColorItem text="indigo - #6610f2" color="indigo" />
                <ColorItem text="blue - #007bff" color="blue" />
                <ColorItem text="cyan - #17a2b8" color="cyan" />
                <ColorItem text="teal - #20c997" color="teal" />
                <ColorItem text="green - #28a745" color="green" />
                <ColorItem text="transparent" color="transparent" />
            </div>
        </div>
    )
}

export default ColorSection;