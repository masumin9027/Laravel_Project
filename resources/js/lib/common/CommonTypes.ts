export interface UpdateStateInputType {
    stateType: string;
    updateValue: any;
}

export interface RootState {
    menuItemState: { drawer: boolean };
}
