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
    gap: 20px;
    padding-bottom: 20px;
    font-size: 1.25rem;
`;
