"use client";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";

const BookStore = () => {
    const [books, setBooks] = useState([]); // Tous les livres
    const [filteredBooks, setFilteredBooks] = useState([]); // Livres filtrés
    const [genres, setGenres] = useState([]); // Liste des genres uniques
    const [selectedGenre, setSelectedGenre] = useState(""); // Genre sélectionné

    useEffect(() => {
        fetch("https://example-data.draftbit.com/books")
            .then((response) => response.json())
            .then((data) => {
                setBooks(data);
                setFilteredBooks(data); // Par défaut, affiche tout

                // 🔥 Extraire tous les genres depuis la chaîne de caractères
                const allGenres = data.flatMap((book) => book.genres?.split(", ").map((g) => g.trim()) || []);
                const uniqueGenres = [...new Set(allGenres)];
                setGenres(uniqueGenres);
            })
            .catch((error) => console.log(error));
    }, []);

    // 🔍 Filtrer les livres selon le genre sélectionné
    useEffect(() => {
        if (!selectedGenre || selectedGenre === "Genres") {
            setFilteredBooks(books);
        } else {
            setFilteredBooks(books.filter((book) => book.genres?.includes(selectedGenre)));
        }
    }, [selectedGenre, books]);

    return (
        <div>
            {/* Barre de filtre */}
            <div className="mt-12 flex justify-between">
                <div className="flex gap-6 flex-wrap">
                    <select
                        onChange={(e) => setSelectedGenre(e.target.value)}
                        className="py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]"
                    >
                        <option value="">Genres</option>
                        {genres.map((genre, index) => (
                            <option key={index} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Liste des produits filtrés */}
            <ProductList books={filteredBooks} />
        </div>
    );
};

export default BookStore;
