import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    max-width: 46rem;
    margin: 0 auto;
    margin-top: 5.625rem;
    padding: 0 1rem;
`;
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;
export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;
export const P = styled.p`
    color: var(--blue);
    font-size: 0.875rem;
    font-weight: 700;
`;
export const P2 = styled.p`
    color: var(--purple);
    font-size: 0.875rem;
    font-weight: 700;
`;
export const Span = styled.span`
    background: var(--gray-400);
    color: var(--gray-200);
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
`;
export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

