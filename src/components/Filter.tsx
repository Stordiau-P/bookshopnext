const Filter = () => {
    return (
        <div className="mt-12 flex justify-between">
            <div className="flex gap-6 flex-wrap">
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]">
                    <option>Genres</option>
                    <option value="Young Adult">Young Adult</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Romance">Romance</option>
                    <option value="Paranormal">Paranormal</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Historical">Historical</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Childrens">Childrens</option>
                    <option value="Dystopia">Dystopia</option>
                    <option value="Literature">Literature</option>
                    <option value="Academic">Academic</option>
                    <option value="School">School</option>
                    <option value="Politics">Politics</option>
                    <option value="Novels">Novels</option>
                    <option value="Read For School">Read For School</option>
                    <option value="Contemporary">Contemporary</option>
                    <option value="Picture Books">Picture Books</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Horror">Horror</option>
                    <option value="Gothic">Gothic</option>
                    <option value="19th Century">19th Century</option>
                    <option value="Classic Literature">Classic Literature</option>
                    <option value="European Literature">European Literature</option>
                    <option value="British Literature">British Literature</option>
                    <option value="Plays">Plays</option>
                    <option value="Poetry">Poetry</option>
                    <option value="High School">High School</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Spirituality">Spirituality</option>
                    <option value="Inspirational">Inspirational</option>
                    <option value="Self Help">Self Help</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Russia">Russia</option>
                    <option value="Russian Literature">Russian Literature</option>
                    <option value="Adventure">Adventure</option>
                </select>
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]">
                    <option>Format</option>
                    <option value="Paperback">Paperback</option>
                    <option value="Hardcover">Hardcover</option>
                </select>
                <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"/>
                <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"/>
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]">
                    <option>Sort By</option>
                    <option value="">Price (low to high)</option>
                    <option value="">Price (high to low)</option>
                    <option value="">Alphabetical</option>
                    <option value="">Number of pages</option>
                    <option value="">Ratings</option>

                </select>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Filter;