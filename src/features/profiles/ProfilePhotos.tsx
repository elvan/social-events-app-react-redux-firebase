import { updateProfile } from 'firebase/auth';
import { deleteObject, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Card, Grid, Header, Image, TabPane } from 'semantic-ui-react';
import { batchSetPhoto } from '../../app/actions/firestoreActions';
import { auth, storage } from '../../app/config/firebase';
import { useFireStore } from '../../app/hooks/firestore/useFirestore';
import { useAppSelector } from '../../app/store/store';
import { Photo, Profile } from '../../app/types/profile';
import PhotoUpload from './PhotoUpload';
import { actions } from './photosSlice';

type Props = {
  profile: Profile;
};

export default function ProfilePhotos({ profile }: Props) {
  const [editMode, setEditMode] = useState(false);
  const isCurrentUser = auth.currentUser?.uid === profile.id;
  const { data: photos, status } = useAppSelector((state) => state.photos);
  const { loadCollection, remove } = useFireStore(`profiles/${profile.id}/photos`);

  useEffect(() => {
    loadCollection(actions);
  }, [loadCollection]);

  async function handleSetMain(photo: Photo) {
    await batchSetPhoto(photo.url);
    await updateProfile(auth.currentUser!, {
      photoURL: photo.url,
    });
  }

  async function handleDeletePhoto(photo: Photo) {
    try {
      const storageRef = ref(storage, `${profile.id}/user_images/${photo.id}`);
      await deleteObject(storageRef);
      await remove(photo.id);
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <TabPane loading={status === 'loading'}>
      <Grid>
        <Grid.Column width={16}>
          <Header floated='left' icon='photo' content='Photos' />
          {isCurrentUser && (
            <Button
              floated='right'
              basic
              content={editMode ? 'Cancel' : 'Add photo'}
              onClick={() => setEditMode(!editMode)}
            />
          )}
        </Grid.Column>
        <Grid.Column width={16}>
          {editMode ? (
            <PhotoUpload profile={profile} setEditMode={setEditMode} />
          ) : (
            <Card.Group itemsPerRow={5}>
              {photos.map((photo) => (
                <Card key={photo.id}>
                  <Image src={photo.url} />
                  {isCurrentUser && (
                    <Button.Group>
                      <Button
                        basic
                        color='green'
                        disabled={photo.url === profile.photoURL}
                        onClick={() => handleSetMain(photo)}
                      >
                        Main
                      </Button>
                      <Button
                        basic
                        color='red'
                        icon='trash'
                        disabled={photo.url === profile.photoURL}
                        onClick={() => handleDeletePhoto(photo)}
                      />
                    </Button.Group>
                  )}
                </Card>
              ))}
            </Card.Group>
          )}
        </Grid.Column>
      </Grid>
    </TabPane>
  );
}
