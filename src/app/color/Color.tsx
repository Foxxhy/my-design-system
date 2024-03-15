import './color.css';

const ColorItem = (props: any) => {
    const { text, color } = props;

    return (
        <div className="color-container-item">
            <span className={`color-item ${color}-background`}></span>
            <span className='label-text'>{text}</span>
        </div>
    );
};

const Color = () => {
    return (
        <div>
            <h2 className="section-title">
                Colors
            </h2>
            <div className="horizontal-separator" style={{ width: '500px'}} />
            <div className="color-container" >
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

export default Color;