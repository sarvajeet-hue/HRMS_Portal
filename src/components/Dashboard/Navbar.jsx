export const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-full bg-blue-400 text-white font-serif px-2">
            <div className="flex items-center gap-5 w-full">
                <p>Home</p>
                <div>Leave Entries</div>
                <div>OutDoor Entries</div>
                <div>Holidays Details</div>
                <div>Attendence Details</div>
                <div>Payroll</div>
            </div>

            <div className="flex items-center justify-center gap-3">
                <button>Accounts</button>
                <button>Notification</button>
            </div>
        </div>
    )
}