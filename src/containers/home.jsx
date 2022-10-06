import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {HomeComponent} from "../components/home/home";
import { fetchResume } from "../store/actions/resume";

export default function Home(props) {
    const resume = useSelector(state => state.resume.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchResume());
    }, [dispatch, resume]);

    return Object.keys(resume).length && <HomeComponent
        resume={resume}
    />
}