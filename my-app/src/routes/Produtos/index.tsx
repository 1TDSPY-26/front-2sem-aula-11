import { useState, useEffect } from 'react';
import { listaProdutos } from '../../data/listaProdutos';
import type { TipoProduto } from '../../types/types';

export default function Produtos() {

    const[produtos, setProdutos] = useState<TipoProduto[]>([]);

    useEffect(() => {
        setProdutos(listaProdutos);
    }, []);

    return (
        <main>
            <h1>Página de Produtos</h1>
        </main>
    );
}