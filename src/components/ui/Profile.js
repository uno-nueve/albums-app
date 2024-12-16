import styled from "styled-components";

export const Avatar = styled.img`
    width: 100%;
    heigth: 100%;
    object-fit: cover;
`;

export const AvatarContainer = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 100%;
    overflow: hidden;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding-bottom: 1.25rem;
    font-size: 1.25rem;

    @media (max-width: 768px) {
        padding-bottom: 0;
    }
`;

export const ProfileText = styled.p`
    @media (max-width: 768px) {
        display: none;
    }
`;
