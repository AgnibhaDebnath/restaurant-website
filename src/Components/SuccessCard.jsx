const SuccessCard = ({ date, time, guests }) => {
    return (
        <div id="SuccessCard" className="w-full flex justify-center my-3 scroll-m-25">
            <div className="rounded-4xl border border-green-300 bg-green-50 px-6 min-[400px]:px-9 pt-5 pb-11 w-110 ">
                <h3 className="text-base min-[415px]:text-lg min-[487px]:text-xl min-[526px]:text-[1.4rem] font-bold font-[inter] text-center tracking-wide">
                    🎉 Reservation Request Submitted
                </h3>

                <p className="mt-4 text-xs min-[400px]:text-sm font-[inter] font-medium">
                    Thank you for choosing Royal Bengali Kitchen.
                </p>

                <p className="font-[inter] mt-2 text-xs min-[400px]:text-sm text-gray-3900">We've received your reservation request and sent a confirmation email.</p>

                <div className="mt-3 text-sm font-[inter]">
                    <p className="text-gray-600">📅 Date: <span className="font-semibold text-gray-900">{date.toDateString()}</span></p>
                    <p className="text-gray-600">🕒Time: <span className="font-semibold text-gray-900">{time}</span></p>
                    <p className="text-gray-600">👥Guests: <span className="font-semibold text-gray-900">{guests}</span></p>
                </div>
            </div>
        </div>
    )
}

export default SuccessCard;